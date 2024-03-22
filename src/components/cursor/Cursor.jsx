import AnimatedCursor from "react-animated-cursor";
import PropTypes from "prop-types";

const Cursor = ({ colorForCursor }) => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={20}
      color={colorForCursor}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      showSystemCursor={true}
      outerStyle={{ zIndex: 11111111111111 }}
      innerStyle={{ zIndex: 11111111111111 }}
    />
  );
};

export default Cursor;

Cursor.propTypes = {
  colorForCursor: PropTypes.string,
};
