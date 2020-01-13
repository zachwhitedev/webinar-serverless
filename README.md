- <code>cd</code> into the name of your API folder, in this case <code>webinarServerless</code>. Then...
- create your service from template using command <code>serverless create --template aws-nodejs</code>
- <code>npm init</code> (this will allow you to use npm modules. Entry point should be set to <code>handler.js</code>)
- <code>npm install aws-sdk --save</code>

To deploy this code as it is, run this command: <code>serverless deploy --stage dev</code>
**Note:** I don't think this will work if you don't include the <code>--stage dev</code> command, because your DynamoDB table that you've defined in your serverless.yml relies on the stage variable to set the table name (which is good, because in development you don't want to be using the production version of your database). For production I think you would do <code>serverless deploy</code>

You can also set the stage in your provider, as in:

<pre><code>
service: service-name

provider:
  name: aws
  stage: dev
</code></pre>

**left off around 42:00 in the video**