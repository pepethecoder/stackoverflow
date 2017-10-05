import { TaskListingPage } from './app.po';

describe('task-listing App', () => {
  let page: TaskListingPage;

  beforeEach(() => {
    page = new TaskListingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
