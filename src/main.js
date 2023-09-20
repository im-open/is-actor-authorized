const core = require('@actions/core');

// When used, this requiredArgOptions will cause the action to error if a value has not been provided.
const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

const authorizedActorsInput = core.getInput('authorized-actors', requiredArgOptions).toLowerCase();
const authorizedActors = JSON.parse(authorizedActorsInput);
core.info(`The authorized actors for the workflow are: \n- ${authorizedActors.join('\n- ')}`);

const actorToEvaluate = core.getInput('actor', requiredArgOptions);
core.info(`The actor to evaluate is ${actorToEvaluate}`);

const index = authorizedActors.indexOf(actorToEvaluate.toLowerCase());
if (index === -1) {
  core.setFailed('The current actor is not authorized to trigger this workflow.');
} else {
  core.info('The current actor is authorized to trigger the workflow.');
}
