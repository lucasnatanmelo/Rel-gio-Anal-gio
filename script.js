//Atribuição de elementos que serão substituidos na tela

let digitalElement = document.querySelector('.digital');
let dataActual = document.querySelector('.dataAtual');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    now = new Date(); //Função Date() pega o horário atual da internet
    let hour = now.getHours(); //Funções getHours + getMinutes + getSeconds irão separar em elemento 
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //.innerHTML irá adicionar as informações na variável elemento
                                                                                         // Função fixZero aplicada para adicionar o zeo a esquerda do valor
    
    dataActual.innerHTML = now.toDateString();

    //Função irá calcular os graus e posicionar os ponteiros (Detalhe do 90, que irá ajustar o ponteiro)                                                                                    
    let sDeg = ((360 / 60) * second)  - 90; 
    let mDeg = ((360 / 60) * minute)  - 90;
    let hDeg = ((360 / 12)) * hour - 90; //Detalhe em 12 horas e não 60
    
    //Irá mudar o style das variáveis dos ponteiros inicialmente criadas
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}                                                                                        

//Por padrão o relógio 
function fixZero(time){
    if(time < 10){
        return '0'+time;
    } else{
        return time;
    }
}
//Outro método de fixZero
//function fixZero(time){
//    return time<10 ? `${time}` : time;


//Executa função a cada 1 segundo
setInterval(updateClock, 1000);

//Executa a função logo no início para evitar o delay de 1s
updateClock();