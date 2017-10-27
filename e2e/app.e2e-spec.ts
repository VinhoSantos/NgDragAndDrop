import { NgDrapAndDropPage } from './app.po';

describe('ng-drap-and-drop App', () => {
  let page: NgDrapAndDropPage;

  beforeEach(() => {
    page = new NgDrapAndDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
