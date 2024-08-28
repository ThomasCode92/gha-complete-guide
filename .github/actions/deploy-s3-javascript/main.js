const core = require('@actions/core');
const { exec } = require('@actions/exec');

function run() {
  // get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // upload files
  const s3Uri = `s3://${bucket}`;
  exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion} --delete`);

  core.notice('Hello form a custom JavaScript action!');
}

run();
