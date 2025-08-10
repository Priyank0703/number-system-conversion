import { useState } from "react";

export default function App() {
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const baseMap = {
    decimal: 10,
    binary: 2,
    octal: 8,
    hex: 16,
  };

  const convert = () => {
    setError(""); // reset error
    try {
      const decimalValue = parseInt(inputValue, baseMap[fromBase]);

      if (isNaN(decimalValue)) {
        throw new Error(`Invalid ${fromBase} number`);
      }

      const converted = decimalValue.toString(baseMap[toBase]).toUpperCase();
      setResult(converted);
    } catch (err) {
      setResult("");
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <div
        className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md 
                   transform transition-all duration-500 hover:scale-105 animate-fadeIn"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white drop-shadow-lg animate-slideDown">
          Base Converter
        </h2>

        <div className="space-y-4">
          {/* From */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-300">From:</label>
            <select
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value)}
              className="p-3 border border-gray-500 rounded-lg bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <option className="bg-gray-800 text-white" value="decimal">
                Decimal
              </option>
              <option className="bg-gray-800 text-white" value="binary">
                Binary
              </option>
              <option className="bg-gray-800 text-white" value="octal">
                Octal
              </option>
              <option className="bg-gray-800 text-white" value="hex">
                Hexadecimal
              </option>
            </select>
          </div>

          {/* To */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-300">To:</label>
            <select
              value={toBase}
              onChange={(e) => setToBase(e.target.value)}
              className="p-3 border border-gray-500 rounded-lg bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              <option className="bg-gray-800 text-white" value="decimal">
                Decimal
              </option>
              <option className="bg-gray-800 text-white" value="binary">
                Binary
              </option>
              <option className="bg-gray-800 text-white" value="octal">
                Octal
              </option>
              <option className="bg-gray-800 text-white" value="hex">
                Hexadecimal
              </option>
            </select>
          </div>
        </div>

        {/* Input & Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-stretch gap-4">
          <input
            type="text"
            placeholder={`Enter ${fromBase} number`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-3 border border-gray-500 rounded-lg bg-black/40 text-white 
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button
            onClick={convert}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       focus:ring-offset-black transition duration-300"
          >
            Convert
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-400 rounded-lg text-red-300 animate-shake">
            ⚠ {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-400 animate-fadeInSlow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-300">Result:</h3>
            <p className="mt-2 text-blue-100 font-mono break-words">
              {inputValue} ({fromBase}) ={" "}
              <span className="font-bold text-blue-400">{result}</span> ({toBase})
            </p>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-fadeInSlow { animation: fadeInSlow 1s ease-in-out; }
        .animate-slideDown { animation: slideDown 0.6s ease-out; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}
