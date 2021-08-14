import { expect } from '@open-wc/testing';
import { VscodeTable } from '../vscode-table';

describe('vscode-table', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-table');
    expect(el).to.instanceOf(VscodeTable);
  });
});
