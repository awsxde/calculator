export default function Buttons({ onClick, onDel, onSign, onReset, onResult }) {
  return (
    <div className="keyboard">
      <button className="keyboard__btn" onClick={onClick}>
        7
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        8
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        9
      </button>
      <button className="keyboard__btn del" onClick={onDel}>
        del
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        4
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        5
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        6
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        +
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        1
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        2
      </button>
      <button className="keyboard__btn" onClick={onClick}>
        3
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        -
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        .
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        0
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        /
      </button>
      <button className="keyboard__btn" onClick={onSign}>
        x
      </button>
      <button className="keyboard__btn reset" onClick={onReset}>
        reset
      </button>
      <button className="keyboard__btn equal" onClick={onResult}>
        =
      </button>
    </div>
  );
}
