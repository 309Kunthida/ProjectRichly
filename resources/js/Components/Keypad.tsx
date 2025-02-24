interface KeypadProps {
    onPress: (key: string) => void;
    onDelete: () => void;
    onSubmit: () => void;
}
interface KeypadProps {
    onPress: (key: string) => void;
    onDelete: () => void;
    onSubmit: () => void; // ✅ เพิ่ม onSubmit
}

const Keypad: React.FC<KeypadProps> = ({ onPress, onDelete, onSubmit }) => {
    return (
        <div className="grid grid-cols-4 gap-3 p-6 bg-yellow-200 rounded-lg w-full max-w-3xl mx-auto shadow-lg">
            {/* 🔢 ตัวเลขและจุด */}
            {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ".", "0", "=", "/"].map((key) => (
                <button
                    key={key}
                    onClick={() => onPress(key)}
                    className="p-4 bg-yellow-100 text-black rounded-lg text-2xl font-semibold shadow-md transition duration-200 hover:bg-yellow-300"
                >
                    {key}
                </button>
            ))}

            {/* 🗑️ ปุ่มลบ */}
            <button
                onClick={onDelete}
                className="col-span-2 p-4 bg-red-500 text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-red-700"
            >
                ← ลบ
            </button>

            {/* ✅ ปุ่มบันทึก */}
            <button
                onClick={onSubmit}
                className="col-span-2 p-4 bg-green-500 text-white rounded-lg text-2xl font-semibold shadow-md hover:bg-green-700"
            >
                ✔️ บันทึก
            </button>
        </div>
    );
};

export default Keypad;
