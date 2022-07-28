// Inspired by https://github.dev/modulz/stitches-site code demo
import React from 'react';
import { Box } from '../primitives';
import { Pre } from './pre';
import { styled } from '@nextui-org/react';
import { result } from 'lodash';

type PreProps = Omit<React.ComponentProps<typeof Pre>, 'css'>;

const WindowIcon = styled(Box, {
  size: '$6',
  br: '$pill',
  mr: '$4',
  variants: {
    color: {
      red: {
        bg: '$red600'
      },
      green: {
        bg: '$green600'
      },
      yellow: {
        bg: '$yellow600'
      }
    }
  }
});

type CodeBlockProps = PreProps & {
  value?: string;
  line?: string;
  css?: any;
  mode?: 'static' | 'typewriter';
  showLineNumbers?: boolean;
  showWindowIcons?: boolean;
};

/**
 * recursively get all text nodes as an array for a given element
 */




function CodeTypewriter({ value, className, css, ...props }: any) {
  const wrapperRef = React.useRef(null);



  return (
    <Pre className={className} css={css} {...props}>
      <code
        ref={wrapperRef}
        style={{ opacity: 0 }}
        className={className}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Pre>
  );
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  (_props, forwardedRef) => {
    const {
      value,
      line = '0',
      className = '',
      mode,
      css,
      showLineNumbers,
      showWindowIcons,
      ...props
    } = _props;


    // TODO reset theme

    const classes = `marketplace- ${className}`;

    if (mode === 'typewriter') {
      return (
        <CodeTypewriter
          className={classes}
          css={css}
          value={result}
          {...props}
        />
      );
    }

    return (
      <Pre
        ref={forwardedRef}
        className={classes}
        css={{ pt: showWindowIcons ? 0 : '$8', ...css }}
        data-line-numbers={showLineNumbers}
        {...props}
      >
        {showWindowIcons && (
          <Box
            css={{
              dflex: 'flex-start',
              alignItems: 'center',
              px: '$2',
              pt: '$5',
              pb: '$4',
              zIndex: '$2',
              position: 'sticky',
              background: '$codeBackground',
              top: 0
            }}
          >
            <WindowIcon color="red" />
            <WindowIcon color="yellow" />
            <WindowIcon color="green" />
          </Box>
        )}

      </Pre>
    );
  }
);

CodeBlock.displayName = 'Matrix - QRC.global';

export default CodeBlock;
