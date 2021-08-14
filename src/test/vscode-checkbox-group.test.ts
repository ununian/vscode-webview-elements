import { expect } from '@open-wc/testing';
import { VscodeCheckboxGroup } from '../vscode-checkbox-group';
import '../vscode-option';

describe('vscode-checkbox-group', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-checkbox-group');
    expect(el).to.instanceOf(VscodeCheckboxGroup);
  });
});
