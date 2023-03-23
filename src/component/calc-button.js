import PropTypes from 'prop-types';

const Keypad = ({ onButtonClick }) => (
  <div className="calc">
    <button
      type="button"
      value="AC"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      AC
    </button>
    <button
      type="button"
      value="+/-"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      +/-
    </button>
    <button
      type="button"
      value="%"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      %
    </button>
    <button
      type="button"
      className="operator"
      value="÷"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      ÷
    </button>

    <button
      type="button"
      value="7"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      7
    </button>
    <button
      type="button"
      value="8"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      8
    </button>
    <button
      type="button"
      value="9"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      9
    </button>
    <button
      type="button"
      value="x"
      className="operator"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      x
    </button>

    <button
      type="button"
      value="4"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      4
    </button>
    <button
      type="button"
      value="5"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      5
    </button>
    <button
      type="button"
      value="6"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      6
    </button>
    <button
      type="button"
      value="-"
      onClick={(e) => onButtonClick(e.target.value)}
      className="operator"
    >
      -
    </button>

    <button
      type="button"
      value="1"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      1
    </button>
    <button
      type="button"
      value="2"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      2
    </button>
    <button
      type="button"
      value="3"
      onClick={(e) => onButtonClick(e.target.value)}
    >
      3
    </button>
    <button
      type="button"
      value="+"
      onClick={(e) => onButtonClick(e.target.value)}
      className="operator"
    >
      +
    </button>

    <button
      type="button"
      value="0"
      onClick={(e) => onButtonClick(e.target.value)}
      className="zero"
    >
      0
    </button>
    <button
      type="button"
      value="."
      onClick={(e) => onButtonClick(e.target.value)}
    >
      .
    </button>
    <button
      type="button"
      value="="
      onClick={(e) => onButtonClick(e.target.value)}
      className="operator"
    >
      =
    </button>
  </div>
);

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
