import { AwsServerlessDemoAppPage } from './app.po';

describe('aws-serverless-demo-app App', () => {
  let page: AwsServerlessDemoAppPage;

  beforeEach(() => {
    page = new AwsServerlessDemoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
