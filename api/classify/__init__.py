import io
import json
import logging

import azure.functions as func

from fastai.basic_train import load_learner
from fastai.vision import open_image
from PIL.ImageOps import exif_transpose


def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    body = req.get_body()

    try:
        img = open_image(io.BytesIO(body), after_open=exif_transpose)
    except IOError:
        return func.HttpResponse(
            "Bad input. Unable to cast request body to an image format.",
            status_code=400,
        )

    learn = load_learner(context.function_directory)
    result = str(learn.predict(img)[0])

    return func.HttpResponse(json.dumps({"result": result}))
