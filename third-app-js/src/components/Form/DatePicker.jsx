import React from "react";
import styles from "./formComponents.module.css";

export default function DatePicker(props) {
	const { value, name, labelText, errorMessage, untilToday, onChangeHandler } =
		props;

	// если значение в атрибуте max не удовлетворяет формату yyyy-MM-dd,
	// то элемент не будет иметь максимальной даты
	const maxDate = untilToday ? new Date().toLocaleDateString("en-ca") : "";

	return (
		<div className={styles.formSubBlock}>
			<label className={styles.label}>{labelText}</label>
			<div className={styles.inputBlock}>
				<input
					type="date"
					name={name}
					className={styles.datePicker}
					value={value}
					max={maxDate}
					placeholder=""
					onChange={onChangeHandler}
				/>
				<p className={styles.errorMessage}>{errorMessage}</p>
			</div>
		</div>
	);
}
