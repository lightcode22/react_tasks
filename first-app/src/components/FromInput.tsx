import React from "react";
import styles from "../form.module.css";

type InputProps = {
	labelText: string;
};

class FormInput extends React.Component<InputProps> {
	render() {
		return (
			<>
				<label className={styles.label}>{this.props.labelText}</label>
				<input className={styles.input} placeholder={this.props.labelText} />
			</>
		);
	}
}

export default FormInput;
