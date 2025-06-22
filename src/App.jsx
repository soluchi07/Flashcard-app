import { useState } from 'react'
import './App.css'
import Card from '/src/components/Card.jsx'
// import Card_DATA from '/src/components/Cards.JSON'

const Card_DATA = [
    {
        question: "What is two's complement representation, and why is it used?",
        answer: "It represents signed integers; negative numbers are stored by inverting bits of the positive value and adding 1, simplifying arithmetic operations.",
        category: "data_representation",
        image: null,
        keywords: ["simplify", "signed integers", "invert", "add 1", "arithmetic"]
    },
    {
        question: "How do you convert a decimal number to IEEE-754 single precision?",
        answer: "Convert integer part to binary, convert fraction, normalize to 1.x * 2^exp, bias the exponent (add 127), assemble: 1 bit sign, 8-bit exponent, 23-bit mantissa.",
        image: "https://www.wikihow.com/images/thumb/e/ea/Teachme.jpg/460px-Teachme.jpg",
        category: "data_representation",
        keywords: ["convert","to binary" ,"fraction", "binary", "mantissa", "23-bit mantissa", "sign bit", "exponent"]
    },
    {
        question: "Convert the decimal number -13 to 8-bit two's complement.",
        answer: "Binary of 13: 00001101 → Invert: 11110010 → Add 1: 11110011.",
        category: "data_representation",
        image: null,
        keywords: ["invert", "add 1", "11110011"]
    },
    {
        question: "What is the Boolean expression for an XOR gate?",
        answer: "A ⊕ B = AB' + A'B",
        category: "digital_logic",
        image: null,
        keywords: ["XOR", "A ⊕ B", "AB'", "A'B"]
    },
    {
        question: "How do you simplify the Boolean expression A + AB?",
        answer: "Using absorption law: A + AB = A.",
        category: "boolean_simplification",
        image: null,
        keywords: ["A(1+B)", "A(1)", "A + AB", "simplify", "A"]
    },
    {
        question: "What is the truth table for a NAND gate?",
        answer: "Outputs 0 only when both inputs are 1; otherwise, outputs 1.",
        category: "digital_logic",
        image: "https://www.gsnetwork.com/wp-content/uploads/2023/01/nand-gate-truth-table.jpg",
        keywords: ["0001", "one 1", "0 when both 1", "output 1","inverse", "opposite of AND"]
    },
    {
        question: "What is the function of a decoder circuit?",
        answer: "Converts binary inputs into a one-hot output (activates exactly one output line).",
        category: "digital_logic",
        image: null,
        keywords: ["convert", "one-hot", "binary input", "output line"]
    },
    {
        question: "What is the difference between combinational and sequential logic?",
        answer: "Combinational logic outputs depend only on current inputs; sequential logic outputs depend on current inputs and past states (memory).",
        category: "sequential_logic",
        image: null,
        keywords: ["current input", "memory", "past state"]
    },
    {
        question: "What is a flip-flop in digital circuits?",
        answer: "A memory element that stores one bit of data, changing state based on clock signals.",
        category: "sequential_logic",
        image: "https://electronicsforu.com/wp-contents/uploads/2017/08/SR-latch.jpg",
        keywords: ["chang", "memory", "clock", "bit", "state"]
    },
    {
        question: "What is the purpose of a multiplexer?",
        answer: "Selects one of many inputs to forward to the output based on select lines.",
        category: "digital_logic",
        image: "https://www.circuitbasics.com/wp-content/uploads/2020/06/image-53.png",
        keywords: ["select" ,"lines", "inputs", "output"]
    },
    {
        question: "How many variables can be managed on a 4-variable Karnaugh map?",
        answer: "4 variables, 16 cells.",
        category: "data_representation",
        image: "https://www.allaboutcircuits.com/uploads/articles/left-to-right-sequence-across-top-3-variable-map.jpg",
        keywords: ["4", "variables", "16", "cells", "four", "sixteen"]
    },
    {
        question: "What is the main difference between synchronous and asynchronous sequential logic?",
        answer: "Synchronous logic uses clock signals to synchronize state changes; asynchronous logic changes state based on input changes without a clock.",
        category: "sequential_logic",
        image: null,
        keywords: ["signal", "input change", "clock", "state change"]
    },
    {
        question: "How does parity differ from ECC?",
        answer: "Parity detects single-bit errors by adding one extra bit; ECC (e.g., Hamming code) both detects and corrects certain error types.",
        category: "memory_systems",
        image: null,
        keywords: ["single","bit", "detect", "error", "Hamming", "correct"]
    },
    {
        question: "Explain the memory hierarchy.",
        answer: "Registers → Cache (L1, L2, L3) → Main memory (RAM) → Secondary storage (disk, optical). Faster memory is smaller and more expensive; slower memory is larger and cheaper.",
        category: "data_representation",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20250111112435920586/Memory-Hierarchy-Design.webp",
        keywords: ["L1", "main memory", "cache", "register", "RAM", "storage"]
    },
    {
        question: "What is the purpose of a cache in a computer system?",
        answer: "Cache stores frequently accessed data to speed up access times, reducing latency compared to main memory.",
        category: "memory_systems",
        image: null,
        keywords: ["frequent", "latency", "speed", "memory", "access"]
    },
    {
        question: "What is the difference between SRAM and DRAM?",
        answer: "SRAM (Static RAM) is faster, uses flip-flops, and retains data without refresh; DRAM (Dynamic RAM) is slower, uses capacitors, and requires periodic refresh.",
        category: "memory_systems",
        image: null,
        keywords: ["faster", "slower", "flip-flop", "capacitor", "refresh", "capacitor"]
    },
    {
        question: "Compare RISC vs. CISC architectures.",
        answer: "RISC features a small, regular instruction set, fixed instruction length, and pipeline-friendly design. CISC features complex, variable-length instructions often involving microcode.",
        category: "processor_architecture",
        image: null,
        keywords: ["instruction set", "pipeline", "microcode"]
    },
    {
        question: "What's memory-mapped I/O?",
        answer: "I/O devices are mapped into the processor's memory address space; load/store instructions access devices just like memory.",
        category: "io_mechanisms",
        image: null,
        keywords: ["memory", "address space", "load/store", "devices"]
    },
    {
        question: "How does DMA differ from programmed I/O?",
        answer: "DMA allows peripherals to transfer data directly to/from memory without CPU intervention; programmed I/O relies entirely on CPU to move data.",
        category: "cpu_architecture",
        image: null,
        keywords: ["peripherals", "CPU", "transfer", "memory"]
    }
];


function App() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [card_text, setCardText] = useState(Card_DATA[index].question)
  const [position, setPosition] = useState([' edge',''])
  const [isCorrect, setIsCorrect] = useState('')

  // const async flipCard = () => {
  //   setFlipped((flipped) => !flipped)
  //   if (true) {
  //     setTimeout(() => {
  //       nextCard()
  //       setFlipped(false)
  //     }, 3000) // Automatically flip back after 3 seconds
  //   }
    
  // }
  const flipCard = () => {
    const newFlipped = !flipped;
    setFlipped(newFlipped);
    if (newFlipped) {
      setCardText(Card_DATA[index].answer);
    } else{
      setCardText(Card_DATA[index].question);
    }
    setIsCorrect('');
    // nextCard();
    // setFlipped(false);
  }
 
  const image = Card_DATA[index].image
  const category = Card_DATA[index].category

  const nextCard = () => {
    if (index === Card_DATA.length - 1){
        setPosition(['',' edge']);
    } else{
    const newIndex = (index + 1) % Card_DATA.length;
    setPosition('')
    setIndex(newIndex);
    setFlipped(false)
    setCardText(Card_DATA[newIndex].question);}
    setIsCorrect('');
  }
  const prevCard = () => {
    if (index === 0){
        setPosition([' edge', '']);
    }else {
    let newIndex;
    newIndex = (index - 1);
    setPosition('')
    setIndex(newIndex);
    setFlipped(false)
    setCardText(Card_DATA[newIndex].question);}
    setIsCorrect('');
}
 
    const checkAnswer = (formData) => {
        const answer = formData.get('answer');
        const words = Card_DATA[index].keywords;
        for (let i = 0; i<words.length; i++){
            if (answer.includes(words[i])){
                setIsCorrect('correct');
                return
            }
        }
        setIsCorrect('wrong')
    }
    

  return (
    <>
            <h1>Computer Architecture Flashcards</h1>
            <h2>Here are a few architecture problems to help you pass for your next CS132 final!</h2>
            <h3>Card {index + 1} of {Card_DATA.length}</h3>
            <div onClick={flipCard}>
                <Card text={card_text} category={category} image={image} flipped={flipped} isCorrect={isCorrect}/>
            </div>
            <div>
                <form action={checkAnswer}>
                    <p>Write your answer: </p>
                    <input name='answer' type='text' placeholder='Please write your answer...' className={isCorrect}/>
                    <button type='submit'>➡️</button>
                </form>
            </div>            
            <div>
                <button className={`prev${position[0]}`} onClick={prevCard}>Prev Card</button>
                <button className={`next${position[1]}`} onClick={nextCard}>Next Card</button>
            </div>
               
    </>
  )
}

export default App
