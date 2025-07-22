import React from "react";

function layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         Products Layout
         {children}
      </div>
   );
}

export default layout;
