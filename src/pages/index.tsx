import React from 'react';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';
import {Desktop, Mobile} from '@smartComponents/index';
import {useTheme} from '@hooks/useTheme';
import {StyleObject} from 'styletron-react';

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <div className={css({backgroundColor: theme.colors.primaryB})}>
      <Button
        onClick={() => {
          if (currentTheme === 'light') {
            setCurrentTheme('dark');
          } else {
            setCurrentTheme('light');
          }
        }}
      >
        Hello
      </Button>
      <p className={css({color: theme.colors.accent600})}>Styled by hook</p>
      <Desktop>Im on A PC and my Theme is {currentTheme}</Desktop>
      <Mobile>Im on a mobile and my Theme is {currentTheme}</Mobile>
      <TestComponent
        overrides={{
          div1: {
            style:{
              backgroundColor: theme.colors.positive,
            }
          },
        }}
      >
        <p>Hello</p>
        <p>Yes</p>
      </TestComponent>
    </div>
  );
};

interface IProps {
  overrides?: {div1?:{style:StyleObject}; div2?:{style:StyleObject}};
}

const TestComponent: React.FC<IProps> = ({children, overrides}) => {
  const [css, theme] = useStyletron();
  return (
    <>
      <div
        className={css(
          overrides?.div1?.style || {
            backgroundColor: theme.colors.accent600,
          },
        )}
      >
        Title
      </div>
      <div
        className={css(
          overrides?.div2?.style || {
            backgroundColor: theme.colors.negative400,
          },
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Index;
