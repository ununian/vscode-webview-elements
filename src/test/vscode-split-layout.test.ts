import { expect } from '@open-wc/testing';
import { VscodeSplitLayout } from '../vscode-split-layout';

describe('vscode-split-layout', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-split-layout');
    expect(el).to.instanceOf(VscodeSplitLayout);
  });
});
