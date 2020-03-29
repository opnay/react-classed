import { ClassedRef } from '@opnay/react-classed';
import React from 'react';
import './index.scss';

const PageWrapper = ClassedRef('PageWrapper', 'page-wrapper', 'div');
const Accent = ClassedRef('Accent', 'accent', 'span');

interface IProps {}
function IndexPage(props: IProps) {
  return (
    <PageWrapper>
      <p>
        This is test page of <Accent>'@opnay/classed'</Accent>
      </p>
    </PageWrapper>
  );
}

export default IndexPage;
