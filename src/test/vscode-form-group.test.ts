import { expect } from '@open-wc/testing';
import { VscodeFormGroup } from '../vscode-form-group';

describe('vscode-form-group', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-form-group');
    expect(el).to.instanceOf(VscodeFormGroup);
  });
});
