import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../components/supabaseClient/supabaseClient";
import { Auth } from "../components/Auth/Auth";
import { Account } from "../components/Account/Account";

export const Home = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div>
      Hello world!
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
};
