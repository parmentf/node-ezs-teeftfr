import {
    __, concat, divide, forEach, map, max, pipe,
} from 'ramda';
import { getResource } from './stop-words';


let terms;
let totalFrequencies;
let weights;
let maxSpecificity;
let specificitySum;

function initialize() {
    terms = [];
    totalFrequencies = 0;
    weights = {};
    maxSpecificity = 0;
    specificitySum = 0;
}

function addSpecificity(term) {
    const { frequency, key } = term;
    const weight = weights[key] || 10 ** -5;
    const computeSpecificity = pipe(
        divide(__, totalFrequencies),
        divide(__, weight),
    );
    const specificity = computeSpecificity(frequency);

    maxSpecificity = max(maxSpecificity, specificity);
    return {
        ...term,
        specificity,
    };
}

function normalizeSpecificity(term) {
    const specificity = term.specificity / maxSpecificity;
    specificitySum += specificity;
    return {
        ...term,
        specificity,
    };
}

const addNormalizedSpecificity = pipe(
    addSpecificity,
    normalizeSpecificity,
);

/**
 * Process objects containing frequency, add a specificity to each object, and
 * remove all object with a specificity below average specificity (except when
 * `filter` is `false`).
 *
 * @export
 * @param {*} data
 * @param {*} feed
 * @param {string} [weightedDictionary="weightsFrench"]    name of the weigthed
 * dictionary
 * @param {Boolean} [filter=true]   filter below average specificity
 * @returns
 */
export default function TEEFTSpecificity(data, feed) {
    const weightedDictionary = this.getParam('weightedDictionary', 'weightsFrench');
    const filter = this.getParam('filter', true);
    if (this.isLast()) {
        let result = map(addNormalizedSpecificity, terms);

        if (filter) {
            const averageSpecificity = specificitySum / terms.length;
            result = result.filter(term => term.specificity >= averageSpecificity);
        }

        feed.write(result);
        return feed.close();
    }
    if (this.isFirst()) {
        initialize();
        getResource(weightedDictionary)
            .map(line => line.split('\t'))
            .forEach(([term, weight]) => { weights[term] = weight; });
    }
    forEach(({ frequency }) => { totalFrequencies += frequency || 0; }, data);
    terms = concat(terms, data);
    feed.end();
}
