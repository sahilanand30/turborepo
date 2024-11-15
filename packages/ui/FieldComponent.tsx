import { Label } from '@radix-ui/react-label';
import { cn } from '~/lib/utils';
import { useId } from 'react';
import { Input } from './Input';

export function Field({
    labelProps,
    inputProps,
    errors,
    className,
}) {
    const fallbackId = useId();
    const id = inputProps.id ?? fallbackId;
    const errorId = errors?.length ? `${id}-error` : undefined;
    const isRequired = inputProps.required;

    return (
        <div className={cn("w-full flex flex-col gap-1.5", className)}>
            <div className='flex flex-row gap-[1px]'>
                <Label htmlFor={id} {...labelProps} />
                <sub className='text-primary'>
                    {isRequired && labelProps ? "*" : ""}
                </sub>
            </div>
            <Input
                id={id}
                aria-invalid={errorId ? true : undefined}
                aria-describedby={errorId}
                {...inputProps}
            />
            <div className='min-h-[28px] px-4 pb-4 pt-1 text-red-600 text-lg'>
                {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
            </div>
        </div>
    );
}

export function ErrorList({ id, errors }) {
    const errorsToRender = errors?.filter(Boolean);
    if (!errorsToRender?.length) return null;
    return (
        <ul id={id} className='flex flex-col gap-1'>
            {errorsToRender.map((e) => (
                <li key={e} className='text-[10px] text-destructive'>
                    {e}
                </li>
            ))}
        </ul>
    );
}