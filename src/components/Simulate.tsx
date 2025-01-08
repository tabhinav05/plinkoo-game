import { useEffect, useState, useRef } from "react";
import { BallManager } from "../game/classes/BallManager.ts";
import { pad } from "../game/padding.ts";
import { WIDTH } from "../game/constants.ts"


export const Simulate = () => {

    const canvasRef = useRef<any>();
    let [output, setOutput] = useState<{[key: number]: number[] }>({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
    });

    async function Simulate(BallManager: BallManager) {
        let i = 0;
        while(1) {
            i++;
            BallManager.addBall(pad(WIDTH/2 + 20 * (Math.random() - 0.5)));
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }

    useEffect(() => {
        if (canvasRef.current){
            const ballManager = new BallManager(
                canvasRef.current as unknown as HTMLCanvasElement,
                (index: number, startX?: number) => {
                    setOutput((outputs: any) => {
                        return {
                            ...outputs,
                            [index]: [...(outputs[index] as number[]), startX],
                        };
                    });
                }
            );
            Simulate(ballManager);
            return () => {
                ballManager.stop();
            };
        }
    },[canvasRef]);

    return (
      <div className="flex flex-col items-center justify-center">
        <canvas ref={canvasRef} width="800" height="800"></canvas>
      </div>
    );

}