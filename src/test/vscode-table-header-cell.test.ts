import { expect } from '@open-wc/testing';
import { VscodeTableHeaderCell } from '../vscode-table-header-cell';

describe('vscode-table-header-cell', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-table-header-cell');
    expect(el).to.instanceOf(VscodeTableHeaderCell);
  });
});
