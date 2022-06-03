import React, { ChangeEvent, FocusEvent } from "react";
import styles from "../form.module.css";

const onInputHandler = (e) => {
	if (!e.target) {
		return;
	}

	const numberInput = e.target;

	// разбивка номера на фрагменты
	const n = numberInput.value
		.replace(/\D/g, "")
		.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);

	if (!n) {
		return;
	}

	const inputValue =
		"+7 (" + (!n[3] ? n[2] : n[2] + ") " + n[3] + (n[4] ? "-" + n[4] : ""));

	e.target.value = inputValue;
};

const onFocusHandler = (e) => {
	if (e.target && e.target.value.length === 0) {
		e.target.value = "+7 (";
	}
};

const onBlurHandler = (e) => {
	if (e.target && e.target.value === "+7 (") {
		e.target.value = "";
	}
};

class PhoneNumberInput extends React.Component {
	render() {
		return (
			<>
				<label className={styles.label}>{this.props.labelText}</label>
				<input
					type="text"
					placeholder="+7 (999) 888-5555"
					className={styles.input}
					onInput={onInputHandler}
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
				/>
			</>
		);
	}
}

export default PhoneNumberInput;
