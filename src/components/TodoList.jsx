//////////////////////3rd////////////////


//////////method1/////////////


// export const TodoList = ({ list }) =>{
//     return(
//         <div>
//             {list.map((e) =>(
//                 <p>
//                     {e.title} - {e.status.toString()}
//                 </p>
//             ))}
//         </div>
//     );
// };

///////////method1 end ///////////


/////////method2//////////

export const TodoList = ({ list, handleToggle }) =>{
    return(
        <div>
            {list.map((e) =>(
                // <p>
                //     {e.title} - {e.status ? "Done" : "Not Done"}
                // </p>
                <p key={e.id}>
                    {e.title} - {e.status ? "Done" : "Not Done"}


                <button
                    onClick={() => {
                        handleToggle(e.id)
                    }}
                >
                    change toggle

                </button>

                </p>
                
            ))}
        </div>
    );
};

//////////method2 ends////////


//////////method3////////

// export const TodoList = ({ list }) =>{
//     return(
//         <div>
//             {list.map((e) =>(
//                 <p>
//                     {e.title} - {`${e.status}`}
//                 </p>
//             ))}
//         </div>
//     );
// };

///////////////////method3 end///////////////