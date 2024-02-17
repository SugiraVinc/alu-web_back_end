#!/usr/bin/env python3
'''coroutine - async generator
'''
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    '''coroutine that loops 10 times and awaits 1sec and yield a num btn 0-10.
    '''
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 10
