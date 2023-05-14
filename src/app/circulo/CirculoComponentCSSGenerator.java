import java.io.FileWriter;
import java.io.IOException;

public class CirculoComponentCSSGenerator {
    
    public static void main(String[] args) {
        int porcentaje = 10;
        String cssContent = ".skill { width: 160px; height: 160px; position: relative; float: left; display: flex; } .outer { height: 160px; width: 160px; border-radius: 50%; padding: 20px; box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7); } .inner { height: 120px; width: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05); } #number { font-weight: 600px; color: #555; } circle { fill: none; stroke: url(#GradientColor); stroke-width: 20px; stroke-dasharray: 472; stroke-dashoffset: 472; animation: anim 2s linear forwards; } svg { position: absolute; top: 0; left: 0; } @keyframes anim { 100% { stroke-dashoffset: "+ porcentaje +"; } }"; // Contenido CSS del archivo
        try {
            FileWriter writer = new FileWriter("YoProgramo/src/app/circulo/circulo.component.css");
            writer.write(cssContent);
            writer.close();
            System.out.println("El archivo circulo.component.css se ha generado correctamente.");
        } catch (IOException e) {
            System.out.println("Ocurrió un error al generar el archivo circulo.component.css.");
            e.printStackTrace();
        }
    }  
}
