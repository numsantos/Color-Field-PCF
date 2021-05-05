import * as React from "react";
import { Dropdown, IDropdownOption, ResponsiveMode } from "office-ui-fabric-react";


export interface NumberInputProps {
  value: number | string;
  onChange: (newValue: number | string) => void;
  backgroundColor: string;
  fontColor: string
}


export interface NumberInputState {
  numberValue: number | string;
}


const options: IDropdownOption[] = [
  { key: '', text: '' },
  { key: 979730001, text: 'No' },
  { key: 979730000, text: 'Yes' }
]



export class NumberInput extends React.Component<NumberInputProps, NumberInputState> {
  private isEditing = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: NumberInputProps) {
    super(props);
    this.state = {
      numberValue: this.props.value,

    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange = (event: any, option: IDropdownOption | undefined): void => {
    this.isEditing = true;
    this.setState({
      numberValue: option?.key || ''
    });
  };

  onBlur = (): void => {
   if(this.isEditing)
      this.props.onChange(this.state.numberValue);
  };


  render(): JSX.Element {
    const {value,  fontColor, backgroundColor } = this.props;
    return (
      <>
        <Dropdown options={options} onChange={this.onChange} onBlur={this.onBlur} selectedKey={this.state.numberValue} style={{border: '0px'}} responsiveMode={ResponsiveMode.large}/>
        <style dangerouslySetInnerHTML={{
          __html: `
            .ms-Dropdown-title { 
              background-color: ${backgroundColor} !important; 
              color: ${fontColor} !important; 
              border: 0px;
            }
            .ms-Dropdown-title:hover { 
              border: 1px solid gray;
            }
    `}} />
      </>
    );
  }
}
