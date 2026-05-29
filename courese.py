from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

from backend.database import courses_db

router = APIRouter(prefix="/courses", tags=["Courses"])


class Course(BaseModel):
    id: int
    title: str
    instructor: str
    price: float
    category: str


@router.get("/", response_model=List[Course])
def get_courses():
    return courses_db


@router.post("/", response_model=dict)
def add_course(course: Course):
    courses_db.append(course.model_dump())
    return {"message": "Course added successfully", "course": course}


