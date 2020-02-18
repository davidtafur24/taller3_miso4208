'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:'card-audit',
            title:'API call',
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'First API call',
            failureDescription: 'First API call too slow',
            helpText: 'Used to measure time from navigationStart to when the first' +
            ' API call is made.',

            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            numericValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;