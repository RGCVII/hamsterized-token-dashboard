const defaultSize = 60;

export const LoadingIndicator = ({ size }: { size?: number }) => {
    if (!size) {
        size = defaultSize;
    }

    return (
        <div className="flex justify-center items-center text-center">
            <div
                className="spinner border-4 border-gray-300 border-t-rg-red rounded-full animate-spin relative mx-auto my-4"
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    borderWidth: `${size / 6}px`,
                }}
            ></div>
        </div>
    );
};
