import React, { useState } from 'react';

function FAQ() {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    const faqs = [
        {
            question: 'Is there a free trial available?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
        {
            question: 'Can I change my plan later?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
        {
            question: 'Can other info be added to an invoive?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
        {
            question: 'How does billing work?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
        {
            question: 'How do I change my account email?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit adipisci veniam reiciendis laudantium voluptatem in incidunt! Quod doloribus nostrum autem!',
        },
    ];

    return (
        <div className='w-full bg-white'>
            <div className='md:max-w-[1480px] max-w-[600px]  m-auto  text-center pt-20 mt-20 px-2 md:px-0'>
                <h1 className=' text-5xl leading-tight text-blue-950  font-semibold md:text-6xl '>Frequently asked questions</h1>
                <p className=' md:text-xl pt-4 text-gray-500 font-medium'>Everything you need to know about the product and billing</p>
            </div>
            <div className='md:max-w-[1480px] max-w-[600px]  m-auto  text-center pt-10 px-2 md:px-0'>
                <div className='md:w-1/2 w-full text-left m-auto'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='tab px-5 py-2 bg-white  relative mb-2 border-b'>
                            <input type='radio'
                                name='faq'
                                id={`faq${index}`}
                                className='appearance-none peer'
                                checked={activeTab === index}
                                onChange={() => toggleTab(index)} />
                            <label
                                htmlFor={`faq${index}`}
                                className="flex items-center cursor-pointer text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl after:text-gray-400 hover:after:text-gray-950 peer-checked:after:transform peer-checked:after:content-['-']">
                                <p className='text-xl'>{faq.question}</p>
                            </label>
                            <div className={`text-left mt-5 transition ease-in-out delay-300 overflow-hidden ${activeTab === index ? 'h-full' : 'h-0'}`}>
                                <p className='text-gray-600'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    );
}

export default FAQ;