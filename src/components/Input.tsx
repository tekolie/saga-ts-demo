import React, { Component } from "react";

type Props = {
  defaultValue: string;
  placeholder: string;
  onChange: (value: string) => void;
};

type State = {
  keyword: string;
};

export class Input extends Component<Props, State> {
  state = {
    keyword: "",
  };

  componentDidMount() {
    this.setState({ keyword: this.props.defaultValue });
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    this.setState({ keyword });
    this.props.onChange(keyword);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.keyword}
        className="form-control"
        placeholder={this.props.placeholder}
        onChange={this.handleOnChange}
      />
    );
  }
}
