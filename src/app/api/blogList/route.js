import * as fs from "fs";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const param = new URL(req.url)?.searchParams?.get("param");
        console.log(param);
        let responseData;
        let fileContents = [];
        if (param) {
            try {
                responseData = await fs.promises.readFile(`blogsdata/${param}.json`, "utf-8");
                // console.log("jhgfdfghjk", responseData)
                responseData = JSON.parse(responseData);
            } catch (error) {
                return NextResponse.json(
                    { message: "blog not found" },
                    { status: 404 }
                );

            }

        } else {
            const files = await fs.promises.readdir('blogsdata');
            console.log(files)

            for (const file of files) {
                const filePath = `${'blogsdata'}/${file}`;
                const data = await fs.promises.readFile(filePath, 'utf-8');
                fileContents.push(JSON.parse(data)); // Assuming JSON format, adjust if needed
            }
        }

        return NextResponse.json(
            { message: "Message Get data", data: param ? responseData : fileContents },
            { status: 200 }
        );


    } catch (error) {
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}