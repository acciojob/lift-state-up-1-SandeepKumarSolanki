import React from 'react'

const Child = ({setShowModal,showModal}) => {

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {
                showModal && (
                    <div>
                        
                        <h2>Modal Content</h2>
                        <p>This is the modal content.</p>
                    </div>
                )
            }

        </div>
    )
}

export default Child
