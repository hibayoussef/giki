

export const StepperButton: React.FC<{ title: string; onClick: (...args: any) => void }> = ({ title, onClick }) => {
    return <>
        <button onClick={onClick}>{title}</button>

    </>
}
