import { useState } from 'react'
import './App.css'
import Card from '/src/components/Card.jsx'
import Card_DATA from '/src/components/Cards.JSON'


[
    {
        
        "question": "What is two's complement representation, and why is it used?",
        "answer": "It represents signed integers; negative numbers are stored by inverting bits of the positive value and adding 1, simplifying arithmetic operations.",
        "category": "data_representation",
        "image": ""
    },
    {
        
        "question": "How do you convert a decimal number to IEEE-754 single precision?",
        "answer": " Convert integer part to binary, convert fraction, normalize to 1.x * 2^exp, bias the exponent (add 127), assemble: 1 bit sign, 8-bit exponent, 23-bit mantissa.",
        "image": "",
        "category": "data_representationn"
    },
    {
        
        "question": "Convert the decimal number -13 to 8-bit two's complement.",
        "answer": "Binary of 13: 00001101 → Invert: 11110010 → Add 1: 11110011.",
        "category": "data_representation",
        "image": ""
    },
    {
        "question": "What is the Boolean expression for an XOR gate?",
        "answer": "A ⊕ B = AB' + A'B",
        "category": "digital_logic",
        "image": ""
    },
    {
        "question": "How do you simplify the Boolean expression A + AB?",
        "answer": "Using absorption law: A + AB = A.",
        "category": "boolean_simplification",
        "image": ""
    },
    {
        
        "question": "What is the truth table for a NAND gate?",
        "answer": "Outputs 0 only when both inputs are 1; otherwise, outputs 1.",
        "category": "digital_logic",
        "image": ""
    },
    {
        
        "question": "What is the function of a decoder circuit?",
        "answer": " Converts binary inputs into a one-hot output (activates exactly one output line).",
        "category": "digital_logic",
        "image": ""
    },
    {
        
        "question": "What is the difference between combinational and sequential logic?",
        "answer": "Combinational logic outputs depend only on current inputs; sequential logic outputs depend on current inputs and past states (memory).",
        "category": "sequential_logic",
        "image": ""
    },
    {
        
        "question": "What is a flip-flop in digital circuits?",
        "answer": "A memory element that stores one bit of data, changing state based on clock signals.",
        "category": "sequential_logic",
        "image": ""
    },
    {
       
        "question": "What is the purpose of a multiplexer?",
        "answer": "Selects one of many inputs to forward to the output based on select lines.",
        "category": "digital_logic",
        "image": ""
    },
    {
        
        "question": "How many variables can be managed on a 4-variable Karnaugh map?",
        "answer": "T4 variables, 16 cells.",
        "category": "data_representation",
        "image": ""
    },
    {
        
        "question": "Q: What is the main difference between synchronous and asynchronous sequential logic?",
        "answer": "Synchronous logic uses clock signals to synchronize state changes; asynchronous logic changes state based on input changes without a clock.",
        "category": "sequential_logic",
        "image": ""
    },
    {
        
        "question": "How does parity differ from ECC?",
        "answer": "Parity detects single-bit errors by adding one extra bit; ECC (e.g., Hamming code) both detects and corrects certain error types.",
        "category": "memory_systems",
        "image": ""
    },
    {
        
        "question": "Explain the memory hierarchy.",
        "answer": " Registers → Cache (L1, L2, L3) → Main memory (RAM) → Secondary storage (disk, optical). Faster memory is smaller and more expensive; slower memory is larger and cheaper.",
        "category": "data_representation",
        "image": ""
    },
    {
        "question": "What is the purpose of a cache in a computer system?",
        "answer": "Cache stores frequently accessed data to speed up access times, reducing latency compared to main memory.",
        "category": "memory_systems",
        "image": ""
    },
    {
        "question": "What is the difference between SRAM and DRAM?",
        "answer": "SRAM (Static RAM) is faster, uses flip-flops, and retains data without refresh; DRAM (Dynamic RAM) is slower, uses capacitors, and requires periodic refresh.",
        "category": "memory_systems",
        "image": ""
    },
    {
        "question": "Compare RISC vs. CISC architectures.",
        "answer": "RISC features a small, regular instruction set, fixed instruction length, and pipeline-friendly design. CISC features complex, variable-length instructions often involving microcode.",
        "category": "processor_architecture",
        "image": ""
    },
    {
        "question": " What's memory-mapped I/O?",
        "answer": "I/O devices are mapped into the processor's memory address space; load/store instructions access devices just like memory.",
        "category": "io_mechanisms",
        "image": ""
    },
    {
        "question": "How does DMA differ from programmed I/O?",
        "answer": " DMA allows peripherals to transfer data directly to/from memory without CPU intervention; programmed I/O relies entirely on CPU to move data.",
        "category": "cpu_architecture",
        "image": ""
    }
]


function App() {
  const [index, setIndex] = useState(0)

  const flipCard = () => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % Card_DATA.length
    })
  }
  
  const currentCard = Card_DATA[index]
  return (
    <>
      <Card title="ques 1" description="N/A" onClick={flipCard(index)}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
