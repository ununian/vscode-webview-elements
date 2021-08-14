import { expect } from '@open-wc/testing';
import { VscodeTree } from '../vscode-tree';

describe('vscode-tree', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-tree');
    expect(el).to.instanceOf(VscodeTree);
  });
});
