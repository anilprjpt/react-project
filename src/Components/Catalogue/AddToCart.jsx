/* eslint-disable react/prop-types */
function AddToCart({addToCart, cardId, btnLabel }) {
    return (
        <>
            <div className="flex items-center mb-4">
                <button 
                    className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-700"
                    onClick={() => addToCart(cardId)}
                >
                    {btnLabel}
                </button>
            </div>
        </>
    )
}

export default AddToCart;