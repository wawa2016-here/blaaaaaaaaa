const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlheGdyY25qYmxxc3BjbHFqdHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTAwMDEsImV4cCI6MjA5NzM4NjAwMX0.4S0e3vXxq1zVKGC48weDfTZ4xn2Dm0RCW_mKtBIHJ3M';
let oprationForty = "PI"

async function sendHttpData(oprationForty) {
  const response = await fetch('https://supabase.co', {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation' 
    },
    body: JSON.stringify({
      forty: oprationForty 
    })
  });

  const data = await response.json();
  console.log('HTTP Inserted Data:', data);
}

async function getHttpData() {
  const response = await fetch('https://supabase.co?select=forty', {
    method: 'GET',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });

  const data = await response.json();
  return data;
}




sendHttpData(operationForty);


async function runMyApp() {
  const dbRows = await getHttpData(); 
  
  console.log("Here is the returned database content:", dbRows);
  
  dbRows.forEach(row => {
    console.log("Value inside database:", row.operationForty);
  });
}

runMyApp();
