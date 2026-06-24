function Profile() {
    return (
        <div id="profile" className="relative flex items-center justify-center w-32 h-32 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 bg-emerald-500/5 animate-wave" />
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 bg-emerald-500/5 animate-wave animation-delay-1500" style={{ animationDelay: '1.5s' }} />
            {/* <div className="relative z-10 border-4 border-emerald-500/30 rounded-full p-1 bg-slate-950 shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"> */}
                <img
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Phyoe Kyaw Than"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto border-4 border-emerald-500/20 object-cover"
                />
            {/* </div> */}
        </div>
    );
}

export default Profile;