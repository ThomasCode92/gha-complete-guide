const core = require('@actions/core');
const { exec } = require('@actions/exec');

function run() {
  // get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  const dryRun = core.getInput('dry-run', { required: true });

  const s3Uri = `s3://${bucket}`;
  const execCommand = `aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion} --delete`;

  // dry run, skip deployment
  if (dryRun === 'true') {
    core.notice('Dry run enabled, skipping deployment');
    core.notice('The following command would have been executed:');
    core.notice(execCommand);

    return;
  }

  // upload files
  core.notice('Uploading files to S3...');
  core.notice('The following command is being executed:');
  core.notice(execCommand);

  exec(execCommand);
}

run();
