import React from "react";

class Translator extends React.Component {
  state = { term: "" };

  render() {
    const { translations } = this.props,
      { term } = this.state;
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input
              onChange={({ target }) => this.setState({ term: target.value })}
              value={term}
              type="text"
              className="text-input"
              data-testid="text-input"
            />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input
              type="text"
              className="text-output"
              data-testid="text-output"
              value={translations.has(term) ? translations.get(term) : ""}
              readOnly
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
