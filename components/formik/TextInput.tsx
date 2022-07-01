import { Field, useField, FieldHookConfig } from "formik";
import { FC } from "react";

type Props = FieldHookConfig<string> & {
	label: string;
};

const TextInput: FC<Props> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="flex flex-col gap-y-2">
			<label className="label p-0" htmlFor={props.id || props.name}>{label}</label>
			<Field
				{...props}
				className={props.className ? props.className : "input input-bordered input-primary"}
				{...field}
				type={props.type}
				placeholder={props.placeholder}
			/>
			{meta.touched && meta.error ? (
				<div className="text-sm text-error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default TextInput;
