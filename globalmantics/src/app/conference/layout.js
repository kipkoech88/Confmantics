export default function ConferenceLayout ({children}){
    return (
        <>
            <header className='w-full text-white items-center bg-[#212121] text-center pt-[50px] px-[0px] pb-[50px] text-3xl'>
                <h1>Globalmantics taking tech to the world by storm</h1>
            </header>
            <section>
                {children}
            </section>
        </>
    )
}