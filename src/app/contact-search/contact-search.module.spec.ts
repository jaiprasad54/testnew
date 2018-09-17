import { ContactSearchModule } from './contact-search.module';

describe('ContactSearchModule', () => {
  let contactSearchModule: ContactSearchModule;

  beforeEach(() => {
    contactSearchModule = new ContactSearchModule();
  });

  it('should create an instance', () => {
    expect(contactSearchModule).toBeTruthy();
  });
});
