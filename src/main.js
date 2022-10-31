const core = require('@actions/core');

// When used, this requiredArgOptions will cause the action to error if a value has not been provided.
const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

const authorizedUsersInput = core.getInput('authorized-actors', requiredArgOptions).toLowerCase();
const authorizedUsers = JSON.parse(authorizedUsersInput);
core.info(`The authorized actors for the workflow are: \n- ${authorizedUsers.join('\n- ')}`);

const actor = core.getInput('actor', requiredArgOptions);
core.info(`The current actor is ${actor}`);

let index = authorizedUsers.indexOf(actor.toLowerCase());
if (index === -1) {
  core.setFailed('The current actor is not authorized to trigger this workflow.');
} else {
  core.info('The current actor is authorized to trigger the workflow.');
}
